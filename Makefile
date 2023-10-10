NPM_BIN := $(shell which npm)

.PHONY: install
install:
	@$(NPM_BIN) install

.PHONY: test-unit
test-unit:
	@$(NPM_BIN) run test:unit -- --mode test

.PHONY: test-int
test-int:
	@$(NPM_BIN) run test:int -- --mode test

