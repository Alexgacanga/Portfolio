import React from "react";

export const Contacts = () => {
  return (
    <div id="contacts" className="bg-black py-12">
      <div class="p-4">
        <div class="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl max-lg:max-w-2xl bg-emerald-600 [box-shadow:0_4px_20px_-5px_rgba(5,150,105,0.4)] rounded-md">
          <div>
            <h2 class="text-white text-3xl font-bold">Let's Talk</h2>
            <p class="text-[15px] text-emerald-50 mt-4 leading-relaxed">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help.
            </p>

            <div class="mt-12">
              <h2 class="text-white text-base font-semibold">Email</h2>
              <ul class="mt-4">
                <li class="flex items-center">
                  <div class="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                    </svg>
                  </div>
                  <a href="mailto:alexgacanga01@gmail.com" class="text-sm ml-4">
                    <small class="block text-emerald-100">Mail</small>
                    <span class="text-white font-medium">
                      alexgacanga01@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-12">
              <h2 class="text-white text-base font-semibold">Socials</h2>
              <ul class="flex mt-4 space-x-4">
                {/* Social Icons with semi-transparent backgrounds for better contrast */}
                <li class="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://wa.me/+254110882711">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </li>
                <li class="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://linkedin.com/in/alexgacanga">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 511 512"
                    >
                      <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0" />
                    </svg>
                  </a>
                </li>
                <li class="bg-white/20 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://github.com/Alexgacanga">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form 
  action="https://formspree.io/f/xbdavwon"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Name"
    required
    className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-emerald-400"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-emerald-400"
  />
  <input
    type="text"
    name="subject"
    placeholder="Subject"
    className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-emerald-400"
  />
  <textarea
    name="message"
    placeholder="Message"
    rows="6"
    required
    className="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-emerald-400"
  ></textarea>

  <button
    type="submit"
    className="text-white bg-emerald-800 hover:bg-emerald-900 rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-pointer border-0 mt-2 transition-colors"
  >
    Send message
  </button>
</form>
        </div>
      </div>
    </div>
  );
};
