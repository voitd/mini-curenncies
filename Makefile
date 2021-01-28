install:
	npm install

lint:
	npx eslint . --ext js,jsx

fix:
	eslint . --fix

deploy:
	vercel
