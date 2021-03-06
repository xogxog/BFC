import { connect } from "react-redux";

function PlaceImg({ thumbnail }: Props) {
  return (
    <img
      src={thumbnail}
      alt=""
      style={{ display: "flex", width: "300px", height: "300px" }}
    />
  );
}
const mapStateToProps = ({ place }: any) => {
  return {
    thumbnail: place.thumbnail,
  };
};
type Props = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(PlaceImg);
