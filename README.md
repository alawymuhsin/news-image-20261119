# The Daily Globe — Thursday 19 November 2026

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/alawymuhsin/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/alawymuhsin/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

One image that sums up the world's news of **Thursday 19 November 2026**,
built for [make.fun's news-image-20261119 bounty](https://make.fun/bounty/news-image-20261119).

## The picture

`entry.png` (1024 × 1024) is a front page: the date in the masthead, one
lead story, six featured cards, a regions strip, and 21 more stories in
brief — **28 stories in all, from six continents**:

**Lead — Shenzhen.** Trump, Xi and Putin sit down together for the first
time: the first three-way summit of the US, Chinese and Russian leaders,
with nuclear arms, Ukraine and the Iran war on the table. An hour is set
aside; no deal is expected.

**Featured cards.** Gulf strikes widen — Iran fires at US bases in Kuwait
and Bahrain, the US hits a missile site on Qeshm Island, a tanker is struck
in the Strait of Hormuz (Middle East); Anthropic's record debut — its IPO
priced at $83 a share, trading starts today on Nasdaq as ANT (Tech);
Cyclone Akvan nears India — a severe storm bears down on the Andhra Pradesh
coast, landfall due 20 November (Asia); Ethiopia–Eritrea on the brink —
troops mass on the border, clashes reported near Badme (Africa); Hegseth in
Caracas — the first US defence chief visit since the raid that seized
Maduro, sealing a joint military deal (Americas); COP31 finance talks grind
on in Antalya as OPEC defends fossil fuels (Climate).

**In brief (21).** Herzog taps Eisenkot to form Israel's government;
Knesset elects Matan Kahana speaker; four nations demand Gaza aid access as
floods swamp camps; Nvidia slides 2.9% after its earnings beat; the US
pursues a $2bn-plus loan package for the Philippines; Liu Yunping becomes
the first Taiwanese American to chair the House Democratic Caucus; the
Crimea bridge shuts again after another attack; a missile threat is
reported towards Riyadh; the US sanctions a Hezbollah-linked network;
Myanmar rethinks its ASEAN ties; Bangladesh garment strikes enter week
three; a Russian military plane crashes in Siberia, 19 dead; Voyager 1
reaches one light-day from Earth; India on top in the Wellington Test;
Pakistan dominate in Rawalpindi; Fiji declares a disaster over drought;
the Paraná floods drive people out of Santa Fe; Ho Chi Minh City Police FC
stun Buriram 1–0; oil prices fall; Nigeria's AFCON hopes fade; India and
Japan review defence ties.

Every story is one reported on 19 November 2026, checked against that
day's news coverage (Reuters, AP, AFP, Al Jazeera and others). The date is
named in the masthead and again in the footer, so the picture cannot be
read as any other day's news. The regions strip counts the stories per
region (Africa 2, Asia 7, Europe 2, Americas 5, Middle East 6, Pacific 2,
World 4), so the breadth of the day is visible at a glance.

## How it is made

The picture was drawn as a clean HTML layout and rendered to PNG at
exactly 1024 × 1024, so every word stays crisp and legible. `main.ts`
(Node 22, standard library only, no network) copies `entry.png` to the
output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Verification

The program does not draw anything — it delivers the finished picture
byte-for-byte. Checked locally with Node 24 (the kit targets Node 22):

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.png out2/entry.png entry.png
```

All three hashes are identical — two runs produce byte-identical output,
and that output is byte-identical to the picture in this repository:

```
f4efc95a40c8f5df8587e5e0fa5d3948fe8a46c9fe9775682df25a8a8914c361
```

`entry.png` is 274,546 bytes, 1024 × 1024. The copy is checked inside
`main.ts` itself: it refuses to exit cleanly unless the written file
matches the source in both length and sha256.

## License

MIT — see [LICENSE](LICENSE).
