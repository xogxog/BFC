import KakaoMap from "../CreateFullCourse/KakaoMap";
import FullCourseDetailKakaoMap from "./FullCourseDetailKakaoMap";
import TempMap from "./TempMap";

interface StepProps {
  activeStep: number;
}
export default function FullCourseMap({ activeStep }: StepProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "1300px",
          height: "500px",
        }}
      >
        <TempMap></TempMap>
        {/* <FullCourseDetailKakaoMap activeStep={activeStep}></FullCourseDetailKakaoMap> */}
      </div>
    </div>
  );
}
