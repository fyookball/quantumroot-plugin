You can modify the service.mjs file per your needs, for example: by adding
allowed libauth methods.

After modifying the service file, you must rebuild the libauth bundle with this command:

npx rollup -c rollup.worker.config.mjs

Finally, you must copy the newly generated libauth_service.bundle.mjs into libauth_plugin/scripts
before rebuilding the entire plugin.
