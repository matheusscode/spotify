import Carousel from "../components/common/carousel";
import Card from "../components/ui/card";

export default function Home() {
  return (
    <main id="page" className="w-full px-2 flex flex-col  gap-4 mb-40 mt-4 ">
      <Carousel title="Tocados Recentemente">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>

      <Carousel title="Feito para matheusscode">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>

      <Carousel title="Parecidos com Charlie Brown Jr.">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
      </Carousel>

      <Carousel title="Podcasts originais e esclusivos do Spotify">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
      </Carousel>

      <Carousel title="Experimente algo diferente">
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
      </Carousel>

      <Carousel title="Estações recomendadas">
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
      </Carousel>

      <Carousel title="Para cantar junto">
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
      </Carousel>

      <Carousel title="Os maiores hits do momento">
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
      </Carousel>
    </main>
  );
}
