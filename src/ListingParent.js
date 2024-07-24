import Listings from "./listings";
import CarOptionsSection from "./about";
import Leasing from "./Leasing";

function ListingParent() {
  return (
    <>
      <Listings />
      <Leasing />
      <CarOptionsSection />
    </>
  );
}

export default ListingParent;