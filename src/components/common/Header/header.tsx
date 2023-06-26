const header = () => (
  <header className="h-14 flex justify-between items-center px-5 lg:px-10 border-b-black border-solid border-2">
    <a href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 48 48"
      >
        <path
          fill="currentColor"
          d="M24 14.5A5.25 5.25 0 1 0 24 4a5.25 5.25 0 0 0 0 10.5Zm-12.292-4.242a4.25 4.25 0 0 0-2.907 7.987l7.872 2.865a.5.5 0 0 1 .329.47v4.438c0 .353-.068.703-.2 1.03l-4.49 11.112a4.25 4.25 0 1 0 7.882 3.184l3.343-8.274a.5.5 0 0 1 .928 0l3.343 8.274a4.25 4.25 0 0 0 7.883-3.184l-4.488-11.104a2.747 2.747 0 0 1-.2-1.03v-4.447a.5.5 0 0 1 .33-.47l7.872-2.864a4.25 4.25 0 1 0-2.908-7.988l-3.812 1.388c-.82.298-1.422.896-1.805 1.544a7.747 7.747 0 0 1-6.677 3.81a7.747 7.747 0 0 1-6.677-3.81c-.384-.648-.986-1.246-1.806-1.544l-3.812-1.387Z"
        />
      </svg>
    </a>
    {/* <h1>Header</h1> */}
    <img src="/hamburger-menu.png" className="h-5" />
  </header>
)

export default header
