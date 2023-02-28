import { Game, PaymentType } from "@prisma/client";
import { FC } from "react";
import styles from "../../styles/mainpage.module.css";
import Link from "next/link";

const ComponentCards: FC<
  Game & {
    paymentInfos: PaymentType[];
  }
> = (game) => {
  let color = null;
  let borderColor = null;

  if (game.name === "Valorant") {
    color = "bg-[#8C3FD9]";
    borderColor = " border-[#BA83F2]";
  } else if (game.name === "Brawlhala") {
    color = "bg-[#6DB8C2]";
    borderColor = " border-[#2F7A84]";
  } else {
    color = "bg-[#242A2B]";
    borderColor = " border-[#4F569E]";
  }

  return (
    <Link
      href={{
        pathname: "/pendaftaran",
        query: {
          game: game.id,
        },
      }}
    >
      <div
        className={
          "box-border lg:h-32 lg:w-48 rounded border-4 p-4 " +
          color +
          borderColor +
          " outline-4 "
        }
      >
        <div className="text-center leading-[85px]">
          <div className={styles.p}>{game.name}</div>
        </div>
      </div>
    </Link>
  );
};
export default ComponentCards;
