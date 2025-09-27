## ---------------------------------------------------------
## Comando base para docker-compose
## ---------------------------------------------------------

DOCKER_COMPOSE = docker compose -f ./.docker/docker-compose.yml

## ---------------------------------------------------------
## Inicialización de la Aplicación
## ---------------------------------------------------------

.PHONY: init-app
init-app: | copy-env create-symlink up print-urls

.PHONY: copy-env
copy-env:
	@ [ ! -f .env ] && cp .env.example .env || true

.PHONY: create-symlink
create-symlink:
	@ [ -L .docker/.env ] || ln -s ../.env .docker/.env

.PHONY: print-urls
print-urls:
	@echo "## Acceso a la Aplicación:   http://localhost:8081/"
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
	$(DOCKER_COMPOSE) exec --user $${USER:-pablogarciajc} php_apache /bin/sh -c "cd /var/www/html/; exec bash -l"

.PHONY: dev
dev:
	sudo docker exec -it --user root php_apache bash -c "cd /var/www/html/frontend && npm run dev -- --host"

## ---------------------------------------------------------
## Instalación de Vite
## ---------------------------------------------------------

.PHONY: vite-create
vite-create:
# 	Entrar al contenedor y crear un proyecto Vite en la raíz del proyecto
# 	Selecciones interactivas que debes hacer:
# 	1 - Ok to proceed? → Y
# 	2 - Current directory is not empty → Ignore files and continue
# 	3 -  Use rolldown-vite (Experimental)? → No
# 	4 - Install with npm and start now? → Yes
	$(DOCKER_COMPOSE) exec --user $${USER:-pablogarciajc} php_apache bash -c "cd /var/www/html && npm create vite@latest . -- --template react"

.PHONY: vite-dev
vite-dev:
# Levanta el servidor de desarrollo de Vite en la raíz del proyecto
# cd /var/www/html → asegúrate de estar en la raíz del proyecto
# npm run dev -- --host → inicia Vite en modo dev y expone el host para acceder desde tu máquina
# Accede luego a la aplicación en: http://localhost:5173
	$(DOCKER_COMPOSE) exec --user $${USER:-pablogarciajc} php_apache bash -c "cd /var/www/html && npm run dev -- --host"


