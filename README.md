# Quantumroot Vault Plugin

This plugin is a prototype wallet-level implementation of Quantumroot.



![image](https://github.com/fyookball/quantumroot-plugin/blob/main/quantumroot-vault.png) 


 
 # Warning

Please understand this work is only developer tested and relies on [Quantumroot](https://github.com/bitjson/quantumroot), a
novel and unaudited Quantum crypto solution.
# FAQ:  


## What is this?

It's a "plugin" for Electron Cash.  A plugin is a software add on.  In this case,
its for the quantumroot vault.  In general, never load plugins unless you are
sure they are from reputable developers.  To load the plugin, go to "Tools"
and then "Installed Plugins" from the Electron Cash menu, and then load
the zip file directly from your comptuer.



## What's the point of this?

If/When Quantum computer become a threat, you can use the vault technology to better secure your coins.

## How to use it, in a nutshell?

It's pretty simple.  The vault plugin will give you a quantum-safe BitcoinCash address to use and receive funds.
To spend from it, just use the send button in the plugin tab.  One more thing though: To use your vault, you need
to first create using the button on the tab. (Behind the scenes, this actually creates an NFT! ) 
To do this, You'll need a "vout 0" coin with sufficient sats.  In simple terms, 
that just means you need funds in your wallet to boostrap the vault.


## How does wallet recovery work?

A: The vault is tied to your XPRV, so if you restore a wallet, the plugin will detect your vault password NFT
by scanning all history transaction to see if any made a "quantumroot" (literal commitment string) NFT.

## Do I only get one vault address?

Yes, one vault address per wallet, for now.  It's technically possible to add more addresses in
future versions like a "normal" wallet.  For now,  let's prove the concept of a quantum wallet first.

## What happens with change from my transaction?

Change goes back to the single vault address.

## How does it all work on a basic technical level?

Creating the vault involves minting an NFT which is identified by its category.  Each time you spend,
you mint a fresh NFT of that category, and these represent a rotating procession of quantum locks. 
The receive address of your vault is not the NFT address, which is a seperate UTXO.  So in a spend,
you'll see one or more UTXOs of your vault address plus the NFT as inputs, and the outputs will be
a destination, change (your vault address again), and the new NFT "baton" for your vault.  Each time you're spending, the quantum lock NFT effectively rotates to a new key.

## What happens if I accidentally burn the NFT of my vault?

You shouldn't be able to "accidentally" do this.  Technically, if it did happen, your coins
would be gone.  However,  wallets that are not aware of Quantumroot will not be able to construct and spend the NFT. 
For exmample, the vault NFT will not even be visible in Electron Cash's token tabs. Developers working on this
or a similar tool do need to be aware and pay attention and avoid critical bugs, as with any wallet software.

## What about the fancy features of Quantumroot?

This plugin makes use of the Quantumroot introspection spend, to spend multiple UTXO at the same address while keeping the transaction size small.

## What about the stuff on the Quantumroot page like "quantum safe at rest from day 1" and "retiring pre-quantum signing". 

This refers to the Schnorr signature fallback that is available in the smart contract.  But there's really no need for it here.
The whole point of storing UTXO in the vault is so you can spend them with Quantum-safe signatures.
 
# How to Load the Plugin
First download the plugin from the Releases section.  Then, from the Electron Cash menu, select Tools->Installed Plugins, then click "Add Plugin" and load the zip file.

# How to Develop and Rebuild the Plugin

**Important!  To save space for github, the Node.js binaries
that live in the bin folder have been zipped.  You should
unzip each of them and delete the original zip files.**

This plugin is based on the [Libauth integration plugin](https://github.com/fyookball/js-libauth-integration-plugin).  The main architectural difference is that this plugin has a more complicated service layer that handles more complex data structures that were unable to be passed directly via JSON, and needs additional specific methods.

As with the libauth plugin, you can customize `libauth_bundling/service.mjs` by adding any
libauth functions you need to the list of allowed
functions.  (This is a whitelist that provides
a safety net.)  And, you can add any other customizations
you need at the service level.

After customizing `libauth_bundling/service.mjs`, you need
to rebuild the libauth bundle with 

`npx rollup -c rollup.worker.config.mjs`

This will generate `libauth_bundling/libauth_service.bundle.mjs`.
Then you should copy this file from the bundling folder and
put it into the plugin scripts folder at `quantumroot-plugin/scripts/libauth_service.bundle.mjs`.
 
When you're ready to compile the plugin, just zip it together from
the top level folder with 

`zip -r quantumroot_plugin.zip manifest.json quantumroot_plugin` 
 
