import { Handlers, PageProps } from "$fresh/server.ts";
import { fetch_game } from "../../api.tsx";
import Presence from "../../islands/Presence.tsx";
import { Bet, GameDetail } from "../../model.tsx";
import { addData, getData } from "../../supabase.tsx";

export const handler: Handlers<[GameDetail, Bet[]]> = {
    async GET(_req, ctx) {
      const url_id = new URL(_req.url).pathname.split('/')[2];
      const data = await getData(url_id);
      console.log(data);
      return ctx.render([await fetch_game(url_id), data]);
    },
    async POST(_req, ctx) {
      const formData = (await _req.formData());
      const object: {[key:string] : string} = {};
      formData.forEach((value, key) => object[key] = value.toString());
      const url_id = new URL(_req.url).pathname.split('/')[2]
      object["game_id"] = url_id;
      addData(object);
      return Response.redirect(_req.url);
    },
  };

export default function Game(props: PageProps) {
  const filter_props = (x: [string, unknown]) => !["id", "_id"].includes(x[0]);
  const show_props = (x: [string, unknown]) =>
    <>
      <div>{x[0] + ": " + x[1]}</div>
    </>;
  const show_game = Object.entries(props.data[0][0]).filter(filter_props).map(show_props);

  const create_bet = <div>
    <form method="POST" encType="multipart/form-data">
      <input class="border-1" type="text" name="home_score"></input>
      <input class="border-1" type="text" name="away_score"></input>
      <input class="border-1" type="text" name="name"></input>
      <input type="submit"></input>
    </form>
  </div>;

  const bets = <><div>Apostas</div>
    {props.data[1].map((x: Bet) =>
    <div>
      <span>{x.away_score}</span> vs <span>{x.home_score}</span> --<span>{x.name}</span>
    </div> 
    )}
    </>;
  
  return <div>{show_game}  {bets} {create_bet}<Presence /></div>;
}
