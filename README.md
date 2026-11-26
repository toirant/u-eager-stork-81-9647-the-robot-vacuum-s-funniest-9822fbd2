# The Robot Vacuum's Funniest Excuse

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2.svg)](https://make.fun/c/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/toirant/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/toirant/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)

Entry for the [make.fun bounty](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2): write the funniest one-line excuse a robot vacuum can give for missing a spot, in at most 120 characters. Entries are judged head-to-head by make.fun's house judge on being a real excuse, being funny at once, speaking in the vacuum's own voice, and drawing humour from a vacuum's world.

## The line

> I did not miss that spot — I promoted the dust bunny living there to floor manager, and it outranks me now.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22) writes the line to `/output/entry.txt`, validating first that it is a single non-blank line of at most 120 characters. It never removes the output directory itself — it only creates it if missing and writes the file inside.

## License

MIT — see [LICENSE](LICENSE).
