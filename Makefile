LOCAL_NODE_MODULES=node_modules
LOCAL_NODE_BIN=$(LOCAL_NODE_MODULES)/.bin
GRUNT=$(LOCAL_NODE_BIN)/grunt
GRUNT_PATH=$(LOCAL_NODE_MODULES)/grunt
GRUNT_OPTS=

all: setup build

$(LOCAL_NODE_MODULES):
	npm install

setup: | $(LOCAL_NODE_MODULES)

build: | setup
	@$(GRUNT) $(GRUNT_OPTS)

.PHONY: all setup build
