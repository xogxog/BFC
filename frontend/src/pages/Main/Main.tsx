import { Stack } from "@mui/material";
import FullCourseCardList from "../../components/Main/FullCourseCardList";
import MainBackground from "../../components/Main/MainBackground";
import MyFullCourse from "../../components/Main/MyFullCourse/MyFullCourse";
import PlaceCardList from "../../components/Main/PlaceCardList";

function Main() {
  // 더미데이터
  const fullCourseDetailList = [
    {
      fullCourseId: 123,
      title: "풀코스이름",
      views: 123456789,
      startOn: new Date("2022-03-17"),
      finishedOn: new Date("2022-03-19"),
      thumbnailList: [
        "https://img.huffingtonpost.com/asset/5b3d67181a00002700ce358a.jpeg?cache=EOIukoBNd9&ops=1200_630",
        "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/157249584768148929.jpg?gif=1&w=720&h=480&c=c",
        "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4BYf/image/OL1_yEG1rO4dXPZAhGEncbsZfN8.jfif",
      ],
      dayPlaceList: [
        {
          courseDate: "2022.03.17",
          day: 1,
          placeList: [
            { name: "우리집", order: 1 },
            { name: "해운대", order: 1 },
          ],
        },
        {
          courseDate: "2022.03.18",
          day: 2,
          placeList: [
            { name: "다대포", order: 1 },
            { name: "해운대", order: 1 },
          ],
        },
        {
          courseDate: "2022.03.19",
          day: 3,
          placeList: [
            { name: "우리집", order: 1 },
            { name: "광안리", order: 1 },
          ],
        },
      ],
    },
    {
      fullCourseId: 122,
      title: "태현이의 부산 탐방기",
      views: 123456789,
      startOn: new Date("2022-04-17"),
      finishedOn: new Date("2022-04-19"),
      thumbnailList: [
        "https://blog.kakaocdn.net/dn/20621/btqT0tVl5DD/k69nk3mj7lVyu4kRxntsk1/img.jpg",
        "https://blog.kakaocdn.net/dn/moS9T/btqT18b9inN/WYF8WSvhtyIWdtiLOltL4K/img.jpg",
        "https://t1.daumcdn.net/cfile/tistory/99A5BB3B5E2A1B0513",
      ],
      dayPlaceList: [
        {
          courseDate: "2022.04.15",
          day: 1,
          placeList: [
            { name: "너희집", order: 1 },
            { name: "몰운대", order: 1 },
          ],
        },
        {
          courseDate: "2022.04.16",
          day: 2,
          placeList: [
            { name: "이기대", order: 1 },
            { name: "부경대", order: 1 },
          ],
        },
        {
          courseDate: "2022.04.17",
          day: 3,
          placeList: [
            { name: "우리집", order: 1 },
            { name: "광안리", order: 1 },
            { name: "국밥", order: 1 },
          ],
        },
      ],
    },
  ];

  const fullCourseList = [
    {
      fullCourseId: 254,
      title: "마이 풀코스",
      thumbnailList: [
        "https://img.huffingtonpost.com/asset/5b3d67181a00002700ce358a.jpeg?cache=EOIukoBNd9&ops=1200_630",
        "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
      ],
      startOn: new Date("2022-03-17"),
      finishedOn: new Date("2022-03-22"),
      views: 2541234,
    },
    {
      fullCourseId: 254,
      title: "마이 풀코스",
      thumbnailList: [
        "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
        "https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg",
        "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
      ],
      startOn: new Date("2022-02-28"),
      finishedOn: new Date("2022-03-22"),
      views: 2541234,
    },
    {
      fullCourseId: 254,
      title: "마이 풀코스",
      thumbnailList: [
        "https://img.huffingtonpost.com/asset/5b3d67181a00002700ce358a.jpeg?cache=EOIukoBNd9&ops=1200_630",
        "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
      ],
      startOn: new Date("2022-03-17"),
      finishedOn: new Date("2022-03-22"),
      views: 2541234,
    },
    {
      fullCourseId: 254,
      title: "마이 풀코스",
      thumbnailList: [
        "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
        "https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg",
        "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
      ],
      startOn: new Date("2022-02-28"),
      finishedOn: new Date("2022-03-22"),
      views: 2541234,
    },
  ];

  const placeList = [
    {
      placeId: 123,
      name: "관광지",
      thumbnail: "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
      address: "부산광역시 금정구 장전동",
      averageScore: 3.2,
      category: 0,
      keywords: [
        "국밥",
        "소주",
        "국밥",
        "소주",
        "국밥",
        "소주",
        "국밥",
        "소주",
      ],
    },
    {
      placeId: 124,
      name: "다른 관광지",
      thumbnail:
        "https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg",
      address: "부산광역시 금정구 장전동",
      averageScore: 3.2,
      category: 0,
      keywords: [
        "국밥",
        "소주",
        "국밥",
        "소주",
        "국밥",
        "소주",
        "국밥",
        "소주",
      ],
    },
    {
      placeId: 123,
      name: "관광지",
      thumbnail: "https://t1.daumcdn.net/cfile/tistory/99504C385EF819AA07",
      address: "부산광역시 금정구 장전동",
      averageScore: 3.2,
      category: 0,
      keywords: [
        "국밥",
        "소주",
        "국밥",
        "소주",
        "국밥",
        "소주",
        "국밥",
        "소주",
      ],
    },
    {
      placeId: 124,
      name: "다른 관광지",
      thumbnail:
        "https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg",
      address: "부산광역시 금정구 장전동",
      averageScore: 3.2,
      category: 0,
      keywords: [
        "국밥",
        "소주",
        "국밥",
        "소주",
        "국밥",
        "소주",
        "국밥",
        "소주",
      ],
    },
  ];

  return (
    <Stack spacing={10}>
      <MainBackground></MainBackground>
      <MyFullCourse fullCourseDetailList={fullCourseDetailList}></MyFullCourse>
      <FullCourseCardList
        fullCourseList={fullCourseList}
        title="인기 풀코스"
      ></FullCourseCardList>
      <PlaceCardList placeList={placeList} title="관광지"></PlaceCardList>
      <PlaceCardList placeList={placeList} title="맛집"></PlaceCardList>
    </Stack>
  );
}
export default Main;
