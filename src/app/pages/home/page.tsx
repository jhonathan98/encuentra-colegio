import FooterColegioCercano from "@/app/componentes/footer";
import NavbarColegioCercano from "@/app/componentes/navbar";
import City from "./components/SearchCity";

export default function home() {
    return (
      <>
        <NavbarColegioCercano/>
        <City/>
        <FooterColegioCercano/>
      </>
    )
}