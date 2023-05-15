import React from 'react'

export default function Header() {
  return (
    <div><header>
    <nav
      class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg   md:flex-wrap md:justify-start"
      data-te-navbar-ref>
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="flex items-center">
          <button
            class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out  lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </button>
        </div>
  
        <div
          class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContentY"
          data-te-collapse-item>
          <ul
            class="mr-auto flex flex-col  lg:flex-row "
            data-te-navbar-nav-ref>
                <li  class="mb-4 lg:mb-0 lg:pr-2 mt-2">
                    <h1 class="text-xxxl">My Company.com</h1>
                </li>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out  disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Home</a
              >
            </li>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Features</a
              >
            </li>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out  disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Pricing</a
              >
            </li>
            <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-outdisabled:text-black/30 lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >About</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  </header></div>
  )
}
