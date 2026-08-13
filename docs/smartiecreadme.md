# COMP 3800 - Smart IEC

Smart IEC is a smart indoor environment control system. It provides a Flask web app for viewing dashboards, collecting feedback, sending device commands, storing sensor data, and integrating with Home Assistant.
For local development, the repo also includes a custom Dockerized Home Assistant instance with mock devices.

## How to Install and Run the App

### Prerequisites

Install these once:

- [uv](https://docs.astral.sh/uv/getting-started/installation/) for Python
  package/project management.
- [pnpm](https://pnpm.io/installation) for Tailwind CSS and the mock Home
  Assistant UI build.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) for the local Home Assistant instance.
- Python 3.13.x. The project currently requires `>=3.13.2,<3.14`. This should be installed automatically within the project virtual environment, but you may find it useful to have this version available globally if you encounter issues.

### First-Time Setup

From the repo root:

```
pnpm install
cp .env.dev .env
```

Use `.env.dev` for local development with the mock Home Assistant container. Use
`.env.example` as the closer client/production-style reference.

Make sure `.env` contains:

```
LOG_LEVEL=INFO
HOME_ASSISTANT__URL=http://127.0.0.1:8123
HOME_ASSISTANT__TOKEN=<your Home Assistant long-lived access token>
```

### Start the App Locally

Start only the mock Home Assistant container:

```
docker compose up -d home-assistant
```

Open [http://127.0.0.1:8123](http://127.0.0.1:8123) and log in with:

```
Username: smartiec
Password: smartiec
```

Generate a long-lived access token from the Home Assistant user profile/security
settings, then paste it into `HOME_ASSISTANT__TOKEN` in `.env`.

Start the Flask backend:

```
uv run smart-control dev
```

Visit [http://127.0.0.1:5000](http://127.0.0.1:5000).

For debug mode and hot reload:

```
uv run smart-control dev --debug
```

## Environment Files

- `.env` is ignored by Git and is the file loaded by default.
- `.env.dev` is intended for local development with mock Home Assistant devices.
- `.env.example` is the production/client-style template.

## Common Commands

| Task                                                 | Command                                                    |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| Install JavaScript dependencies                      | `pnpm install`                                             |
| Build Tailwind CSS once                              | `pnpm build`                                               |
| Watch Tailwind CSS                                   | `pnpm watch`                                               |
| Start mock Home Assistant only                       | `docker compose up -d home-assistant`                      |
| Rebuild/start mock Home Assistant                    | `docker compose up -d --build home-assistant`              |
| Start backend locally                                | `uv run smart-control dev`                                 |
| Start backend with debugger/reloader                 | `uv run smart-control dev --debug`                         |
| Reset dev database on startup                        | `uv run smart-control dev --reset-db`                      |
| Run all tests, including remote Home Assistant tests | `docker compose up -d home-assistant` then `uv run pytest` |
| Start backend and Home Assistant in Docker           | `docker compose up -d --build`                             |
| Stop Docker services                                 | `docker compose down`                                      |
| Reset Docker services and volumes                    | `docker compose down -v`                                   |

The backend can run in Docker through the `backend` service, but day-to-day development is easier with only `home-assistant` in Docker and the backend running locally through `uv`.

## Home Assistant Development

See [home-assistant/README.md](home-assistant/README.md) for more details about exporting/importing shared mock devices and assigning devices to areas.

The custom Home Assistant setup lives in `home-assistant/`.

- `home-assistant/components/mock/` contains the custom mock integration.
- `home-assistant/ui/` contains the "Mocked Devices" panel UI.
- `home-assistant/config/mock-seed/` contains mock device seed files.

If you change the mock Home Assistant UI, you can build it locally first:

```
pnpm --filter home-assistant build
```

To see the updated UI inside the Dockerized Home Assistant instance, rebuild the Home Assistant image:

```
docker compose up -d --build home-assistant
```

The container seeds mock devices on startup by copying committed `home-assistant/config/mock-seed/mock.*` files into Home Assistant storage when
those files do not already exist in the Docker volume.

If you have already been working with a different mock device setup and want to use the predefined mock seed files, reset the Docker volume so Home Assistant recreates its storage:

```
docker compose down -v
docker compose up -d --build home-assistant
```

Recreating the volume also resets Home Assistant state. After it starts again, log in, generate a new long-lived access token, update `HOME_ASSISTANT__TOKEN` in `.env`, and recreate/assign the Home Assistant areas used for zones.

## Mock Device Naming Convention

### `entity_id`

The app uses Home Assistant entity IDs such as `sensor.samba_bd7804_air_temperature`.

Home Assistant entity IDs are generated from the device name and entity name:

```
{domain}.{device_name}_{entity_name}
```

Example:

```
Entity type: Sensor
Name / Entity Name: Air Temperature
Unique ID: samba_bd7804_air_temperature
Device unique ID: samba_bd7804
Device name: Samba BD7804

# Generated entity_id: sensor.samba_bd7804_air_temperature
```

### `unique_id`

When creating a mock device from the `Add device` section, the mock UI auto-generates a `unique_id` as you type. It follows this pattern:

```
unique_id: {device_unique_id}_{entity_name}
```

You can edit the generated `unique_id` before creating the entity.

### Important distinction

- `device_unique_id` is the internal device identifier/grouping key. Entities with the same `device_unique_id` are grouped under one parent device.
- `unique_id` is the internal identifier for one entity.
- `device_name` is the display/device name Home Assistant uses when generating the entity ID.

If you want the entity ID to stay `sensor.samba_bd7804_air_temperature` but the
display name to say `Samba 1 Air Temperature`, create the mock sensor first with
`Device name: Samba BD7804`, then rename the display/device name in Home Assistant UI after the entity exists. Home Assistant does not automatically change an existing entity ID when only the display name changes. This name change updates the display/friendly name.

#### References:

- [Home Assistant entity naming](https://developers.home-assistant.io/docs/core/entity/#entity-naming)
- [Home Assistant unique ID docs](https://developers.home-assistant.io/docs/core/integration-quality-scale/rules/entity-unique-id)

## Database

The default SQLite database path is:

```text
data.db
```

The app stores local development data in `data.db`. This file is ignored by Git so each developer has their own local database.

To start the app with a fresh development database, run:

```
uv run smart-control dev --reset-db
```

Open it in a terminal:

```
sqlite3 data.db
```

You can run SQL queries here.

If you are using PyCharm, use `View > Tool Windows > Database`, add a SQLite data source, and
choose the repo's `data.db`.

If you are using VSCode, you can use the SQLTools extension for database queries.

## Data Export

The project includes a CSV export CLI. See [EXPORT_CLI_README.md](EXPORT_CLI_README.md) for the full guide.

## PyCharm Debug Configuration

If you are using PyCharm, you can create a Python run/debug configuration to easily run the app from your IDE instead of running the command in terminal. Here are configuration details:

- Name: `smart-control dev`
- Module name: `smart_control.main`
- Parameters: `dev`
- Working directory: repo root
- Python interpreter: the project `uv` virtual environment, usually `.venv`

If you prefer script path instead of module name, point it to
`src/smart_control/main.py`.

## Troubleshooting

| Problem                                                      | Fix                                                                                                                        |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `LOG_LEVEL` validation error                                 | Use uppercase values like `INFO`; restart the terminal if the old environment value persists.                              |
| Home Assistant container is running but UI never initializes | Stop the container, remove the Docker volume/image if needed, then run `docker compose up -d --build home-assistant`.      |
| Mock seed changes do not appear                              | Run `docker compose down -v` before rebuilding so Home Assistant storage is recreated.                                     |
| Backend cannot reach Home Assistant                          | Confirm `HOME_ASSISTANT__URL=http://127.0.0.1:8123`, the token is current, and the Home Assistant UI loads in the browser. |
| Tailwind output is missing/stale                             | Run `pnpm install`, then `pnpm build`                                                                                      |
| Docker Compose cannot find `home-assistant`                  | Run Docker commands from the repo root where `docker-compose.yml` lives.                                                   |

## Backend Folder Structure

The backend follows a hexagonal architecture to separate business logic from
external dependencies.

```
src/smart_control/
├── domain/          # Core data models (RoomTelemetry, UserFeedback, etc)
├── controllers/     # HTTP request handlers (feedback, questionnaire, dashboard, trigger)
├── routes/          # URL mappings to controllers (/api prefix)
├── adapters/        # External integrations
│   ├── storage/           # Database layer (SQLite and in-memory storage)
│   ├── home_assistant/    # Device control via Home Assistant
│   ├── comfort_model/     # Thermal comfort calculations (PMV/PPD)
│   └── command_generator/ # Device command generation strategy
├── components/      # Shared business logic
├── data/            # Database schema and migrations
├── export/          # CSV export CLI
├── static/          # Frontend assets
├── app.py           # Flask application factory
├── main.py          # Entry point
└── settings.py      # Pydantic settings and configuration
```

## How to Extend the Backend

### Adding a New Controller

Controllers handle HTTP requests and return JSON responses.

1. Create a new file in `src/smart_control/controllers/my_feature.py`:

   ```python
   from flask import jsonify, request
   from .base import BaseController
   from smart_control.adapters import Storage

   class MyFeatureController(BaseController):
       def __init__(self, storage: Storage):
           self.storage = storage

       def get(self):
           data = self.storage.fetch_data()
           return jsonify(data), 200

       def post(self):
           payload = request.json
           self.storage.save_data(payload)
           return jsonify({"status": "saved"}), 201
   ```

2. Register it in `src/smart_control/controllers/__init__.py`:

   ```python
   from .my_feature import MyFeatureController

   __all__ = (
       # existing controllers...
       "MyFeatureController",
   )
   ```

3. Add route (see next section)

### Adding a New Route

Routes connect URL paths to controllers in `src/smart_control/routes/api.py`:

```python
from smart_control.controllers import MyFeatureController

class APIRoutes(RouteGroup):
    name = "api"
    import_name = __name__
    prefix = "/api"

    routes = {
        "/my-feature": MyFeatureController,
    }
```

The full endpoint becomes `/api/my-feature`.

### Adding a New Adapter

Adapters implement external system integrations. Create an abstract interface and
concrete implementation when a new integration does not fit an existing adapter
family.

1. Define the abstract interface in `src/smart_control/adapters/my_system/base.py`:

   ```python
   from abc import ABC, abstractmethod

   class MySystemAdapter(ABC):
       @abstractmethod
       def do_something(self, data):
           ...
   ```

2. Implement it in `src/smart_control/adapters/my_system/implementation.py`:

   ```python
   from .base import MySystemAdapter

   class ConcreteMySystem(MySystemAdapter):
       def do_something(self, data):
           return process(data)
   ```

3. Export it from `src/smart_control/adapters/my_system/__init__.py`, and from
   `src/smart_control/adapters/__init__.py` if other packages need to import it
   from `smart_control.adapters`.

### Adding a New Implementation for an Existing Adapter

When an adapter already exists, like `ComfortModel`, `CommandGenerator`,
`Storage`, or `HomeAssistant`, create another implementation without changing the
interface. This allows different strategies to be swapped while keeping the same
contract.

**Example**: Adding a new comfort model implementation

1. Create a new file in the adapter folder:

   ```python
   # src/smart_control/adapters/comfort_model/custom.py
   from smart_control.domain import ComfortMetrics, RoomTelemetry, UserFeedback
   from .base import ComfortModel


   class CustomComfortModel(ComfortModel):
       def calculate_pmv_ppd(
           self,
           telemetry: RoomTelemetry,
           zone_name: str,
           last_comfort_metrics: ComfortMetrics | None = None,
           user_feedback: list[UserFeedback] | None = None,
       ) -> ComfortMetrics:
           pmv = calculate_custom_pmv(telemetry)
           ppd = calculate_custom_ppd(pmv)
           return ComfortMetrics(
               pmv=pmv,
               ppd=ppd,
               category="neutral",
               zone_name=zone_name,
           )
   ```

2. Export it in the adapter's `__init__.py`:

   ```python
   # src/smart_control/adapters/comfort_model/__init__.py
   from .base import ComfortModel
   from .pmv_ppd import PMVPPDComfortModel
   from .custom import CustomComfortModel

   __all__ = ["ComfortModel", "PMVPPDComfortModel", "CustomComfortModel"]
   ```

3. Select the implementation where the adapter is created, such as `main.py`,
   app setup code, or tests.

`FakeHomeAssistant` exists at `src/smart_control/adapters/home_assistant/fake.py`
and is useful for tests that need controllable telemetry. It does not yet
implement the full sensor-reading/device-state surface used by the running app,
so local end-to-end development still uses the Dockerized Home Assistant
service.

### Working with Domain Models

All core data types are in `src/smart_control/domain/models.py`. Use them for
type safety instead of passing ad hoc dictionaries between controllers,
components, and adapters.

```python
from smart_control.domain import DeviceCommand, RoomTelemetry

telemetry: RoomTelemetry

# Access data
temp = telemetry.dry_bulb_temp.value
humidity = telemetry.relative_humidity.value
co2 = telemetry.co2_levels.value

# Create commands for devices
command = DeviceCommand(
    target_id="ceiling_fan",
    action="increase_speed",
    value=2.5,
)
```

## How to Build the Installer

The `installer` directory contains configuration for building a MSI installer with [WiX](https://docs.firegiant.com/wix/).

To build the installer:

1. Install the .NET SDK from https://dotnet.microsoft.com/en-us/download
2. Install WiX with `dotnet tool install --global wix`
3. Run:

```
PS C:\Users\kstei> wix eula accept wix7
PS C:\Users\kstei> wix extension add WixToolset.Firewall.wixext
PS C:\Users\kstei> wix extension add WixToolset.Util.wixext
PS C:\Users\kstei> wix extension add WixToolset.BootstrapperApplications.wixext
```

4. Make sure wix is in your PATH
5. From the project root, make sure the virtual environment is running
6. Run `pnpm install`
7. Run `python installer/compile.py` (with --clean if a previous build exists)
8. Install with the `smartiec-<version>-standalone.msi` file

## Important Dependencies Used in This Project

- [Flask](https://flask.palletsprojects.com/en/stable/) - Python web app framework
- [Click](https://click.palletsprojects.com/en/stable/) - CLI
- [pydantic_settings](https://pydantic.dev/docs/validation/latest/concepts/pydantic_settings/) - Environment variable management
- [sqlite3](https://docs.python.org/3/library/sqlite3.html) - Python's builtin library for SQLite database interactions
- [Waitresss](https://docs.pylonsproject.org/projects/waitress/en/latest/) - Production server
- [Tailwind](https://tailwindcss.com/docs/installation/using-vite) - CSS
- [pytest](https://docs.pytest.org/en/stable/index.html) - Tests
- [pythermalcomfort](https://pythermalcomfort.readthedocs.io/en/latest/index.html) - Thermal comfort estimation
- [WiX](https://docs.firegiant.com/wix/) - Installer toolset