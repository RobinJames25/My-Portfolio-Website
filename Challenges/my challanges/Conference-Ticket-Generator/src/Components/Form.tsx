import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadIcon from '../Assets/images/icon-upload.svg';

function Form() {
  const navigate = useNavigate(); // Create the navigate function
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [github, setGithub] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (selectedFile: File | undefined) => {
    if (selectedFile) {
      if (selectedFile.size > 500 * 1024) {
        alert('File size exceeds 500KB. Please choose a smaller file.');
        return;
      }
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Reset the error message as the user is typing
    setEmailError('');

    // Validate the email on every change
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value && !emailPattern.test(value)) {
      setEmailError('Please enter a valid email address');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation on submit
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      // Navigate to /ticket route on successful validation, passing data to the ticket page
      navigate('/ticket', {
        state: { name, email, file, github, avatar: previewUrl },
      });
    }
  };

  return (
    <div className="p-4 max-w-[800px] mx-auto">
      <h1 className="text-center mb-4 text-neutral-0 font-extrabold text-clamp" tabIndex={0}>
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-center text-[hsl(252,6%,83%)] mb-4">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form
        className="flex flex-col max-w-[600px] gap-[1.5rem] mx-auto mb-[8rem]"
        aria-labelledby="form-title"
        onSubmit={handleSubmit}
      >
        <label className="text-neutral-0" htmlFor="avatar">
          Upload Avatar
        </label>

        <div
          role="button"
          tabIndex={0}
          className={`border-2 border-dashed p-5 text-center h-[150px] flex justify-center items-center w-full rounded-[10px] cursor-pointer transition-colors ${
            isDragging
              ? 'bg-[hsl(245,19%,45%)] border-[hsl(252,6%,83%)]'
              : 'bg-[hsla(245,19%,35%,0.406)] border-neutral-500'
          }`}
          aria-label="Upload your avatar. Drag and drop or click to upload"
          onClick={() => document.getElementById('avatar')?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            id="avatar"
            accept="image/*,.jpeg,.png"
            type="file"
            tabIndex={-1}
            required
            className="sr-only"
            aria-required="true"
            onChange={handleFileChange}
          />
          {previewUrl ? (
            <div className="relative flex flex-col items-center">
              <img src={previewUrl} alt="Uploaded Avatar" className="h-16 object-cover" />
              <div className="flex gap-2 mt-2">
                {/* Remove Image Button */}
                <button
                  type="button"
                  className="px-2 py-1 text-sm text-neutral-0 border border-neutral-500 rounded-md bg-[hsl(245,19%,35%)] hover:bg-[hsl(245,19%,45%)] z-10"
                  onClick={handleRemoveImage}
                >
                  Remove Image
                </button>
                {/* Change Image Button */}
                <button
                  type="button"
                  className="px-3 py-1 text-sm text-neutral-0 border border-neutral-500 rounded-md bg-[hsl(245,19%,35%)] hover:bg-[hsl(245,19%,45%)] z-10"
                  onClick={() => document.getElementById('avatar')?.click()}
                >
                  Change Image
                </button>
              </div>
            </div>
          ) : (
            <div>
              <img
                src={uploadIcon}
                className="inline-block p-2.5 bg-[hsl(245,19%,35%)] border border-[hsl(245,15%,58%)] rounded-lg max-w-full"
                alt="Upload Icon"
              />
              <p className="text-base text-[hsl(252,6%,83%)]">
                {isDragging ? 'Drop your file here' : 'Drag & drop, or click to upload'}
              </p>
            </div>
          )}
        </div>

        <p className="text-[hsl(245,15%,58%)] text-xs">
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[hsl(0,0%,100%)]" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
            className="text-[hsl(252,6%,83%)] p-2 border border-[hsl(245,15%,58%)] rounded-sm bg-[hsla(245,19%,35%,0.406)]"
            required
            aria-required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-[hsl(0,0%,100%)]" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            required
            className={`text-[hsl(252,6%,83%)] p-2 border ${
              emailError ? 'border-[hsl(7,88%,67%)]' : 'border-[hsl(245,15%,58%)]'
            } rounded-sm bg-[hsla(245,19%,35%,0.406)]`}
            aria-required="true"
            aria-describedby="email-desc"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="text-[hsl(7,88%,67%)] text-xs mt-1">{emailError}</p>}
        </div>

        {/* Github */}
        <div className="flex flex-col gap-2">
          <label className="text-[hsl(0,0%,100%)]" htmlFor="github">
            Github Username
          </label>
          <input
            id="github"
            type="text"
            placeholder="Github @username"
            autoComplete="off"
            required
            className="text-[hsl(252,6%,83%)] p-2 border border-[hsl(245,15%,58%)] rounded-sm bg-[hsla(245,19%,35%,0.406)]"
            aria-required="true"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>

        <input
          type="submit"
          aria-label="Generate your ticket"
          value="Generate My Ticket"
          className="px-4 py-2 bg-[hsl(7,88%,67%)] cursor-pointer rounded-lg border-0 font-inconsolata-bold text-[#332c2b]"
        />
      </form>
    </div>
  );
}

export default Form;
