ARG VERSION=latest
FROM jac18281828/tsdev:${VERSION}

ARG PROJECT=collective_governance
WORKDIR /workspaces/${PROJECT}

COPY package.json .
COPY yarn.lock .
RUN yarn install --save-dev

COPY . .

RUN chown -R jac.jac .

USER jac

RUN yarn prettier:check
RUN yarn eslint
RUN yarn build

CMD npm start
