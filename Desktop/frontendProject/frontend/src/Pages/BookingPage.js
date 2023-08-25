import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

import BicycleLarge from "../assets/large bicycle.jpg";
import ReviewBox from "../client/ReviewBox";
import MoreVehicle from "../client/MoreVehicle";
import BookingWidget from "../client/BookingWidget";

export default function BookingPage() {
  return (
    <div className="pt-5 mx-10">
      <h1 className=" text-3xl py-2 font-bold">Zeus, from the LSD Store </h1>
      <div className="flex text-sm">
        <h2>Location in Vangvieng. --{">"}</h2>
        <MapPinIcon className="w-5 mr-1" />{" "}
        <a
          className=" font-semibold underline cursor-pointer"
          href="https://www.google.com/maps/place/Lao+Telecom+Head+Office,+Vientiane/@17.9694523,102.6085013,15.65z/data=!4m6!3m5!1s0x3124687c8d38ef55:0x34d4917bce5559f1!8m2!3d17.9698392!4d102.612381!16s%2Fg%2F1hc1476xs?entry=ttu"
        >
          Lao Telecom Head Office, Vientiane
        </a>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-5">
        <div className=" bg-gray-300 overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover "
            src={BicycleLarge}
            alt="img"
          />
        </div>
        <div className="lg:ml-10 ">
          <h1 className="sm:mt-5 md:mt-5 lg:mt-0 text-2xl font-semibold">
            Description
          </h1>
          <p className=" leading-1 text-gray-600 text-sm my-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum." Section 1.10.32 of "de
            Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-2">
          <div className="">
            {" "}
            <ReviewBox />
          </div>
          <div className=" ml-5 border-t mt-5">
            <BookingWidget />
          </div>
        </div>

        <div className=" mt-8 text-center text-3xl font-bold pb-2 ">
          More Vehicle
        </div>
        <div className="d border-b pb-2 text-center">
          <p>Click each to go for them</p>
        </div>

        <MoreVehicle />
      </div>
    </div>
  );
}
