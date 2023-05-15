import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { HeartIcon } from "@heroicons/react/outline";
export default function Home() {
  return (
    <div>
      <Header />
      <div className=" mx-10 my-10">
        <div class="grid grid-cols-3 gap-10">
          <div>
            <div class="grid grid-cols-4">
              <div className="cursor-pointer font-medium">DETAILS</div>
              <div className="cursor-pointer">DELIVERY</div>
              <div className="cursor-pointer">FIT</div>
              <div className="cursor-pointer">SHARE</div>
            </div>
            <p>
              The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
              lunar lavishness by night and by day: a blazer in a linen blend
              shot with lurex for a shimmering surface that shines like a star
              in the sky. it has a straight fit with well defined shoulders and
              a shawl collar culminating in a button and has been flawlessly
              finished with three jet pockets with a sartorial feel. See the
              EDITOR’S NOTE Learn about the DESIGNER
            </p>
          </div>
          <div>
            <div
              style={{ height: "100vh", overflowY: "scroll" }}
              class={styles.imageContent}
            >
              <HeartIcon className={`h-5 w-5 text-black-500 ${styles.icon}`} />
              <img
                src={"/images/pic1.jpg"}
                alt="pic1"
                className={styles.image}
              />

              <img
                src={"/images/pic2.jpg"}
                alt="pic1"
                className={styles.image}
              />

              <img
                src={"/images/pic3.jpg"}
                alt="pic1"
                className={styles.image}
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <span className="text-center font-medium">
                a note from the editor
              </span>
              <span className="text-center font-medium">
                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
                lunar lavishness by night and by day: a blazer in a linen blend
                shot with lurex for a shimmering surface that shines like a star
                in the sky.
              </span>
            </div>
          </div>
          <div>
            <div class="grid ">
              <h1 className="text-5xl">JONATHAN SIMKHAI</h1>
              <span>Lurex Linen Viscose Jacket in Conchiglia</span>
              <span>$335</span>
              <span>
                <b>color</b>:Conchiglia
              </span>
              <div className="grid grid-cols-12 mt-5">
                <div className="border-solid border-2 border-black-500 text-center">
                  <img
                    src={"/images/pic1.jpg"}
                    alt="pic1"
                    className={`${styles.image} text-center`}
                    width={30}
                  />
                </div>
                <div className="border-solid border-2 border-black-500 text-center ml-2">
                  <img
                    src={"/images/pic2.jpg"}
                    alt="pic1"
                    className={styles.image}
                    width={50}
                  />
                </div>
              </div>
              <button class="bg-black hover:bg-black-100 text-white font-semibold py-2 px-4 border border-black-400 rounded-3xl shadow-10">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
