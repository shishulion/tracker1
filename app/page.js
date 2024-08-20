'use client'

import Link from "next/link";
import styles from "./page.module.css";
import {useTelegram} from "./useTg";
import Hustler from "./ui/Name";
import {useCallback, useEffect, useState, useRef} from "react";
import Habs from './ui/Art';
import Auth from './lib/auth';
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();
  const {user,webApp} = useTelegram();

  const settt = () => {
    router.push("/set")

  };



  const usr = user;
  useEffect(() => {
    if (usr) {
      Auth(usr);
    };
  }, [usr]);

  useEffect(()=> {
    if (webApp) {
    webApp.MainButton.hide();
    webApp.BackButton.hide();
    webApp.SettingsButton.show();
    webApp.SettingsButton.onClick(settt);
    }

  }, [webApp])

  return (
          <main className={styles.main}>

            {Boolean(!usr) && <p>Ain't work on desktop</p>}

              <Hustler />
              <br />
            <h1>Cause He Do Art: </h1>
            <br />
            <Habs id={user?.id}/>
            <br />
          </main>
  );
}
