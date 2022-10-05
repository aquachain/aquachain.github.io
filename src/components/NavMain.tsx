import { Metalink } from "./Metalink";

export const NavMain = () => (
    <>
        <Metalink to="/" button>Home</Metalink>
        <Metalink to="/about" button>About</Metalink>
        <Metalink to="https://aquachain.github.io/explorer/#/" button>Explorer</Metalink>
        <Metalink to="/learn/readme" button>Documentation</Metalink>
        <Metalink to="/learn/mining" button>Mining</Metalink>
        <Metalink to="/connect" button>Connect Web3</Metalink>
        <Metalink to="https://github.com/aquachain/aquachain/releases" button>Download</Metalink>
        <Metalink to="https://discordapp.com/invite/JXBFkHq" button>Discord</Metalink>
        <Metalink to="https://t.me/AquaCrypto" button>Telegram</Metalink>
        <Metalink to="https://github.com/aquachain/aquachain.github.io" button>Edit This page</Metalink>
    </>
)