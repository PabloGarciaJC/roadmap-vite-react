## ---------------------------------------------------------
## Variables base
## ---------------------------------------------------------
DOCKER_COMPOSE = docker compose -f ./.docker/docker-compose.yml
APP_DIR = /var/www/html
USER = pablogarciajc

## ---------------------------------------------------------
## Inicialización de la Aplicación
## ---------------------------------------------------------
.PHONY: init-app 
init-app: up npm-install npm-host

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
	$(DOCKER_COMPOSE) build --no-cache

.PHONY: stop
stop:
	$(DOCKER_COMPOSE) stop

.PHONY: shell
shell:
	$(DOCKER_COMPOSE) exec --user $(USER) server_core bash

.PHONY: clean-project
clean-project:
	sudo docker rm -f roadmap_vite_react_server || true
	sudo docker rmi -f roadmap_vite_react_image || true
	sudo docker network rm roadmap_vite_react_network || true

## ---------------------------------------------------------
## Instalación y configuración del proyecto (React + npm)
## ---------------------------------------------------------
.PHONY: npm-create
npm-create:
	$(DOCKER_COMPOSE) exec --user $(USER) server_core bash -c \
		"cd $(APP_DIR) && npm create vite@latest . -- --template react"

.PHONY: npm-install
npm-install:
	$(DOCKER_COMPOSE) exec --user $(USER) server_core bash -c \
		"cd $(APP_DIR) && npm install"

.PHONY: npm-host
npm-host:
	$(DOCKER_COMPOSE) exec --user $(USER) server_core bash -c \
		"cd $(APP_DIR) && npm run dev -- --host"

## ---------------------------------------------------------
## Build para producción y local (React + Vite)
## ---------------------------------------------------------
.PHONY: build-prod
build-prod:
	$(DOCKER_COMPOSE) exec --user $(USER) server_core bash -c \
		"cd $(APP_DIR) && npm run build"