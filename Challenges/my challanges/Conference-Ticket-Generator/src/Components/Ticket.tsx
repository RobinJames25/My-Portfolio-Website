import React from 'react';
import { useLocation } from 'react-router-dom';
import ticketBg from '../Assets/images/pattern-ticket.svg';
import ticketLogo from '../Assets/images/logo-full.svg';
import githubLogo from '../Assets/images/icon-github.svg';

export function Ticket() {
  const location = useLocation();
  const { name, email, github, avatar } = location.state || {};

  return (
    <div className="max-w-[800px] mx-auto flex flex-col items-center p-4 text-neutral-0">
      <h1 className="text-[clamp(1rem,3vw+0.5rem,4vw)] font-extrabold text-center mb-4">
        Congrats,
        <span className="bg-gradient-text bg-clip-text text-transparent">{name}</span>
        <br />
        Your ticket is ready.
      </h1>
      <p className="text-center text-[hsl(252,6%,83%)] mb-4">
        We've emailed your ticket to
        <br />
        <span className="text-orange-500">{email}</span>
        and will send updates in
        <br />
        the run-up to the event.
      </p>
      <div className="mt-12 relative inline-block">
        <img src={ticketBg} className="w-[23rem]" alt="ticketBg" />
        <span
          aria-label="Your Ticket number is 10906"
          className="absolute top-[43%] right-[3%] rotate-90 text-[hsl(252,6%,83%)]"
        >
          #10906
        </span>
        <div className="absolute left-5 top-5">
          <img src={ticketLogo} className="max-w-full" alt="ticketLogo" />
          <p className="ml-12 text-[0.8rem] text-[hsl(252,6%,83%)]">Jan 31, 2025 / Austin, TX</p>
        </div>
        <div className="absolute flex gap-4 bottom-[10%] left-5">
          {avatar && (
            <img
              src={avatar}
              className="w-12 object-cover object-center"
              alt="Your uploaded avatar"
            />
          )}
          <div>
            <p aria-label={`Your username is ${name}`}>{name}</p>
            <div className="flex gap-2 items-center mt-0.5">
              <img src={githubLogo} className="max-w-full" alt="githubLogo" />
              <span
                className="text-[0.8rem] text-neutral-300"
                aria-label={`Your github username is ${github}`}
              >
                @{github}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
