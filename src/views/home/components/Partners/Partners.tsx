import Image from "next/image";
import BAIImage from "./assets/03 - BAI_logo_Positive.png";
import Buka from "./assets/Buka logo.png";
import DigitalAo from "./assets/Logo do Digital.png";
import Monabele from "./assets/Monabele logotipo 1.png";
import Agricargas from "./assets/logotipo 1.png";
import { Container } from "@/components/layout/container/Container";

export function Partners() {
  return (
    <Container className=" w-full flex justify-center items-center mb-10">
      <div className="flex overflow-x-scroll lg:overflow-hidden lg:grid grid-cols-5 items-center w-full gap-x-20">
        <Image src={BAIImage} className="w-40" alt="BAI" />
        <Image src={Buka} className="w-40" alt="BAI" />
        <Image src={DigitalAo} alt="BAI" className="w-40" />
        <Image src={Monabele} alt="BAI" className="w-40" />
        <Image src={Agricargas} alt="BAI" className="w-24" />
      </div>
    </Container>
  );
}
