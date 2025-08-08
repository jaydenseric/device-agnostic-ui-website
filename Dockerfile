FROM denoland/deno:2.4.3
EXPOSE 8080
WORKDIR /project
ADD . .
ENV RUCK_DEV false
ENV RUCK_PORT 8080
CMD ["./scripts/serve.sh"]
