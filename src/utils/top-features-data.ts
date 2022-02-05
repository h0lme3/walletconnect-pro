import ChainAgnostic from "assets/images/top-features/chain-agnostic.svg";
import MultiChain from "assets/images/top-features/multi-chain.svg";
import MultiSession from "assets/images/top-features/multi-session.svg";
import OneTimePairing from "assets/images/top-features/one-time-pairing.svg";
import ReducedBandwidth from "assets/images/top-features/reduced-bandwidth.svg";
import DecentralizedMessaging from "assets/images/top-features/decentralized-messaging.svg";
import PermissionSystem from "assets/images/top-features/permission-system.svg";
import GuaranteedDelivery from "assets/images/top-features/guaranteed-delivery.svg";
import PlatformAgnostic from "assets/images/top-features/platform-agnostic.svg";

export const topFeaturesData = [
  {
    src: ChainAgnostic,
    alt: "Chain Agnostic",
    title: "Chain Agnostic",
    content:
      "Interoperate with any blockchain. Support new blockchains and rollups out-of-the-box.",
  },
  {
    src: MultiChain,
    alt: "Multi Chain",
    title: "Multi Chain",
    content:
      "Connect to a wallet with one or more chains simultaneously and send transactions to different chains at the same time. No more chain switching.",
  },
  {
    src: MultiSession,
    alt: "MultiSession",
    title: "Multi Session",
    content:
      "Manage as many sessions as needed. A flexible API is provided to build the desired UX.",
  },
  {
    src: OneTimePairing,
    alt: "One-Time Pairing",
    title: "One-Time Pairing",
    content:
      "Establishes multiple sessions from a single pairing. Only one connection for an infinite number of sessions.",
  },
  {
    src: ReducedBandwidth,
    alt: "Reduced Bandwidth",
    title: "Reduced Bandwidth",
    content:
      "Websocket management efficiently re-uses resources to multiplex all messages through a single socket without interruption.",
  },
  {
    src: DecentralizedMessaging,
    alt: "Decentralized Messaging",
    title: "Decentralized Messaging",
    content:
      "Message relaying now uses Waku network to gossip messages through all nodes. No more depending on centralized servers.",
  },
  {
    src: PermissionSystem,
    alt: "Permission System",
    title: "Permission System",
    content:
      "Explicitly require wallets to meet compatibility with all signing methods that your dapp requires.",
  },
  {
    src: GuaranteedDelivery,
    alt: "Guaranteed Delivery",
    title: "Guaranteed Delivery",
    content:
      "Smarter caching mechanisms guarantee message delivery in more diverse network conditions.",
  },
  {
    src: PlatformAgnostic,
    alt: "Platform Agnostic",
    title: "Platform Agnostic",
    content:
      "Works everywhere across desktop apps, browser apps, mobile apps, gaming apps and much more. ",
  },
];
