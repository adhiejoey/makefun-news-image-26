# The World in One Page — Thursday 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/adhiejoey/makefun-news-image-26/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard)
[![reward](https://make.fun/badge/news-image-20261126/adhiejoey/makefun-news-image-26/reward.svg)](https://make.fun/bounty/news-image-20261126)

One image that sums up the world news of **Thursday 26 November 2026** — a morning-edition
front page drawn as a newspaper: masthead, a full-day UTC timeline, three illustrated lead
stories, a "day in numbers" strip, ten illustrated cards, 22 more stories, a dot map of
17 places, and a DATE CHECK box.

## What is on the page — 35 stories

**Leads:** the Bank of Korea lifts its base rate to 3.25% (CONFIRMED, Reuters + CNBC);
the Saudi-led coalition says it intercepted two Houthi ballistic missiles over Riyadh
(CLAIM, QNA); Thanksgiving Day in the US — three NFL games, markets shut, storms
threatening floods in California (OFFICIAL, NFL + BBC).

**Cards:** the Nikkei rebounds at the open; Australia's business investment jumps 12.2%;
the ASX 200 edges up; California's flood warning; the Yoon perjury verdict due in Seoul;
Europe's three summits in Brussels; two Davis Cup quarter-finals; New Zealand votes
tomorrow; South Africa's Phala Phala committee meeting in doubt; Mumbai marks 18 years
since 26/11.

**Also today:** 22 more stories — Korea's rail campaign, Seoul rents passing jeonse,
Flight Centre's breach probe, Neuren's halt, SKS Technologies, Harvey Norman, Northern
Star, Australia's parliament, Palm Beach ferries, New Zealand's donation return, the
Nursing Council audit, ACC's AI flagging, Spain's snap election, France, the BBC's
jihadism analysis, the Stratocaster, a US pastor, Ecuador, Mexico and Brazil.

**Date discipline:** every story happened, or was first reported, on 26 November 2026
(any time zone), unless marked SCHEDULED. The DATE CHECK box lists 12 near-misses we
excluded with their true dates — Shenzhou-24 (25 Nov), the US Section 301 tariffs
(25 Nov), the FCC's SpaceX clearance (25 Nov), the Iowa blast (25 Nov), the turkey
pardon (24 Nov), Korea's Davis Cup loss (25 Nov), Lukashenko's Moscow offer (24 Nov),
the Niger state attack (24 Nov), Ramaphosa's court win (25 Nov), China's 6G pilot
(24 Nov), the Macy's parade postponement (25 Nov) and the US stock fall (25 Nov).

**Honest limit:** this is a morning edition, compiled about 01:45 UTC, so the page
covers the Asia-Pacific morning and the US overnight, plus the day's scheduled events
(the Yoon verdict, the BOK press conference, Japan's indices, the Davis Cup, the EU
summits, the NFL tripleheader). No unverified date was printed as fact.

## How it was made

The page was drawn as one HTML document with hand-made inline SVG illustrations
(`build/page.html`), screenshotted at 1024×1024 with a headless Chromium, and saved as
`entry.png`. `main.ts` copies that image to the output directory — no network, no
dependencies, the same bytes on every run.

## Entry

- Competition: [news-image-20261126](https://make.fun/bounty/news-image-20261126) ($100)
- Program: `main.ts` (Node 22, standard library only) writes `entry.png` to
  `$MAKEFUN_OUTPUT_DIR` (default `/output`)
- Image: `entry.png`, 1024×1024 PNG, under 1 MiB
- License: MIT (see `LICENSE`)
