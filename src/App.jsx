import { useState } from 'react'
import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Edilaine"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos omnis consequuntur quisquam magni ducimus alias ex soluta perspiciatis rem praesentium, possimus quos sequi saepe. Illum, molestiae! Quos, quam expedita."
          />
          <Post
            author="Jonas"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos omnis consequuntur quisquam magni ducimus alias ex soluta perspiciatis rem praesentium, possimus quos sequi saepe. Illum, molestiae! Quos, quam expedita."
          />
        </main>
      </div>
    </>
  )
}