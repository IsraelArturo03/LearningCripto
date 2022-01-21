import { Outlet, Link } from "react-router-dom";

export default function Choise() {
  return (

    <div class = "text-center bg-zinc-300 py-8 px-8 space-y-5">
      <h1 className="text-5xl font-bold text-center" > Please choose you cripto currency </h1>
      <form>
        <div class = "p-6 rounded-xl shadow-lg flex items-center space-x-4 py-10 px-40">
          <label>
            Ether(ETH)
          </label>
          <Link to="/etherum"><img width = "300" height = "100" src='https://imgsrv2.voi.id/RScjHgP8Q-3dThTymkrMM4-8azXkxabdxAjAL1C-wgY/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy84MjE0NS8yMDIxMDkwNDIxMjctbWFpbi5jcm9wcGVkXzE2MzA3NzMwODcucG5n.jpg'></img></Link>
          <label>
            BinanceCoin(BNB)
          </label>
          <Link to="/binance"><img width = "300" height = "100" src='https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iproup.com/assets/jpeg/2021/02/16383.jpeg?7.1.4'></img></Link>
        </div>
        <div class = "p-6 rounded-xl shadow-lg flex items-center space-x-4 px-40">
          <label>
            Polygon(MATIC)
          </label>
          <Link to="/polygon"><img width = "300" height = "100" src="https://www.creativefabrica.com/wp-content/uploads/2021/06/16/Cryptocurrency-Polygon-Logo-Pile-Coin-Graphics-13459604-1.jpg"></img></Link>
          <label>
            Bitcoin(BTC)
          </label>
          <Link to="/bitcoin"><img width = "300" height = "100" src="https://elceo.com/wp-content/uploads/2021/03/bitcoinn.jpg"></img></Link>
        </div>

        <div class = "p-6 rounded-xl shadow-lg flex items-center space-x-4 px-40">
          <label>
            Avalanche(AVAX)
          </label>
          <Link to="/Avalanche"><img width = "300" height = "100" src="https://liukin.es/wp-content/uploads/2021/10/Predicciones-de-precios-de-avalancha-%C2%BFa-donde-llevara-un-listado.jpg"></img></Link>
        </div>
      </form>
      <h1 class = "text-5xl font-bold text-center">Notices</h1>
      <div class = "flex space-x-10">
        <img width = "300" height = "100" src="https://i.ytimg.com/vi/3ysU6FlxWOc/maxresdefault.jpg"></img>
        <img width = "300" height = "100" src="https://i.ytimg.com/vi/rPBZRmkMqqE/maxresdefault.jpg"></img>
        <img width = "300" height = "100" src="https://i.ytimg.com/vi/BVKxy1PCttA/maxresdefault.jpg"></img>
        <img width = "300" height = "100" src="https://i0.wp.com/www.myquestend.com/wp-content/uploads/2022/01/NOTICIAS-de-CRIPTOMONEDAS-HOY-PREDICCION-Shiba-Inu-Cardano-Bitcoin.jpg?resize=780%2C470&ssl=1"></img>
        <img width = "300" height = "100" src="https://i1.wp.com/static.news.bitcoin.com/wp-content/uploads/2021/10/auction.jpg?resize=1280%2C720&ssl=1"></img>
      </div>
      <Outlet />
    </div>

  );
}