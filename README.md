# Js-Libauth-Integration-Plugin 

This plugin is a prototype bridge between Electron Cash and javascript/Libauth 
using an embedded Node binary.  It is intended as a boilerplate for
developers to create plugin applications that require either Libauth
or javascript in general.

Please consider this work to be minimally tested and possibly incomplete.
Use with your own discretion and due dilligence.

# Overview

The plugin has two functions.  First, it provides a persistent Node.js instance
with libauth, and secondarily: a "one-off" js runner.

For the main Libauth functionality, the plugin starts a Node.js subprocess which runs `scripts/libauth_service.bundle.mjs`.  You can then
make as many calls as you want to various libauth functions.  Theoretically, any calls will work,
even if they are in different threads.

For the secondary function, see "JS" section below.

Other than the embedded binaries, the plugin is lightweight.  There are intentionally no wrapper functions.
Instead, you can call any Libauth function, but the developer is responsible for understanding
each call's input and output types. 

Be aware of particuarly heavy calls to Libauth, because they could hang Electron Cash's GUI
thread if not well managed.  (This is more of a general programming tip.)

# JSON and type markers

Transport between python and js is done via stdin/stdout with JSON as the wire protocol.  The developer
must specify "hexbytes" or "bigint" markers when passing data from python to javascript within the plugin code
(qt.py).  When retrieving data back, the service layer deals with typing, so nothing special is required
as long as you understand the shape of the data being returned, as it's represented in JSON. 

Hopefully the example calls in qt.py make everything clear. 

# Integrating with JS (without Libauth)

The secondary function of this plugin is run any js file.  It is similar to the Libauth usage
in terms of JSON in, JSON out, but the node instance is not meant to persist in this
case.  The node spins up, runs the script, and exits gracefully. 
Theoretically, you could build a persistent node and get it to work with any arbitrary
js script, but that would be outside of the initial scope of the project.

There is a hello.js call as an example.

# UI not included

There is a new wallet tab created, as is the custom for most plugins, but it
is intentionally blank.

# What does this plugin do out of the box?

The plugin will run several test calls to Libauth and one custom JS call to a "hello" script
and print the output to the console.

![image](https://github.com/fyookball/js-libauth-integration-plugin/blob/main/libauth-plugin.png)


# How to Develop and Rebuild the Plugin

**Important!  To save space for github, the Node.js binaries
that live in the bin folder have been zipped.  You should
unzip each of them and delete the original zip files.**

Customize `libauth_bundling/service.mjs` by adding any
libauth functions you need to the list of allowed
functions.  (This is a whitelist that provides
a safety net.)  And, you can add any other customizations
you need at the service level.

After customizing `libauth_bundling/service.mjs`, you need
to rebuild the libauth bundle with 

`npx rollup -c rollup.worker.config.mjs`

This will generate `libauth_bundling/libauth_service.bundle.mjs`.
Then you should copy this file from the bundling folder and
put it into the plugin scripts folder at `libauth_plugin/scripts/libauth_service.bundle.mjs`.

Your main development work will be in `libuath_plugin/qt.py`.  You can 
follow the examples and add your own Libauth calls.

When you're ready to compile the plugin, just zip it together from
the top level folder with 

`zip -r quantumroot_plugin.zip manifest.json quantumroot_plugin`

Any one-off custom javascript files can simply be put in `libauth_plugin/scripts`,
on the same level as hello.js.

# Node.js

Node version 22 is used because this is the last version that provides
win32 binaries (Electron Cash windows still runs on 32 bits). In theory,
different Node versions could be used for each platform.



