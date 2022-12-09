// https://45d351da-f195-4f64-b7eb-df635dd58160.mock.pstmn.io/games

import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {Game} from "../model.tsx";
import {fetch_games} from "../api.tsx"

export const handler: Handlers<Game[]> = {
    async GET(_req, ctx) {
      const data = await fetch_games();
      return ctx.render(data);
    },
  };

export default function Home(props: PageProps<Game[]>) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
          {props.data.map(element => <div>
            <p class="my-4 text-center"><a href={"/games/" + element.id}><span>{element.home_team_en}</span> vs <span>{element.away_team_en}</span></a></p>
          </div>)}
      </div>
    </>
  )
}