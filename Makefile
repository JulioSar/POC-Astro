NPM_BIN := $(shell which npm)

.PHONY: test-unit
test-unit:
    @$(NPM_BIN) run test -- --mode test

.PHONY: install
install:
    @$(NPM_BIN) install
