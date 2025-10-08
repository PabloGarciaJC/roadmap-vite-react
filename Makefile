## ---------------------------------------------------------
## Comando base para docker-compose
## ---------------------------------------------------------
DOCKER_COMPOSE = docker compose -f ./.docker/docker-compose.yml
APP_DIR = /var/www/html
USER = pablogarciajc

## ---------------------------------------------------------
## Inicialización de la Aplicación
## ---------------------------------------------------------

.PHONY: init-app
init-app: | copy-env create-symlink up npm-install npm-host

.PHONY: copy-env
copy-env:
	@ [ ! -f .env ] && cp .env.example .env || true

.PHONY: create-symlink
create-symlink:
	@ [ -L .docker/.env ] || ln -s ../.env .docker/.env

.PHONY: print-urls
print-urls:
	@echo "## Acceso a la Aplicación:   http://localhost:5173"
	@echo "## Acceso a PhpMyAdmin:      http://localhost:8082/"

## ---------------------------------------------------------
## Gestión de Contenedores
## ---------------------------------------------------------
.PHONY: up
up:
	$(DOCKER_COMPOSE) up -d

.PHONY: down
down:
	$(DOCKER_COMPOSE) down

.PHONY: restart
restart:
	$(DOCKER_COMPOSE) restart

.PHONY: ps
ps:
	$(DOCKER_COMPOSE) ps

.PHONY: build
build:
	$(DOCKER_COMPOSE) build

.PHONY: stop
stop:
	$(DOCKER_COMPOSE) stop

.PHONY: clean-docker
clean-docker:
	sudo docker rmi -f $$(sudo docker images -q) || true
	sudo docker volume rm $$(sudo docker volume ls -q) || true
	sudo docker network prune -f || true

.PHONY: shell
shell:
	$(DOCKER_COMPOSE) exec --user ${USER} server_core /bin/sh -c "cd ${APP_DIR}; exec bash -l"

## ---------------------------------------------------------
## Permisos dentro del contenedor
## ---------------------------------------------------------
.PHONY: set-permissions
set-permissions:
	@echo "🔧 Ajustando permisos de la aplicación..."
	$(DOCKER_COMPOSE) exec --user root server_core bash -c "chown -R ${USER}:${USER} ${APP_DIR} && chmod -R 755 ${APP_DIR}"

## ---------------------------------------------------------
## Instalación y configuración del proyecto (React + npm)
## ---------------------------------------------------------

.PHONY: npm-create
npm-create:
	$(DOCKER_COMPOSE) exec --user pablogarciajc server_core bash -c "cd /var/www/html && npm create vite@latest . -- --template react"

.PHONY: npm-install
npm-install:
	$(DOCKER_COMPOSE) exec --user pablogarciajc server_core bash -c "cd /var/www/html && npm install"

.PHONY: npm-host
npm-host:
	$(DOCKER_COMPOSE) exec --user pablogarciajc server_core bash -c "cd /var/www/html && npm run dev -- --host"

## ---------------------------------------------------------
## Build para producción (React + Vite)
## ---------------------------------------------------------
.PHONY: build-prod
build-prod:
	$(DOCKER_COMPOSE) exec --user ${USER} server_core bash -c "cd ${APP_DIR} && npm run build"