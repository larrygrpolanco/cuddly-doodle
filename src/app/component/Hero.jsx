import Link from "next/link";

export default function Hero() {
  return (
    <div class='hero min-h-screen bg-base-200'>
      <div class='hero-content text-center'>
        <div class='max-w-md'>
          <h1 class='text-5xl font-bold'>Hello there</h1>
          <p class='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link className='btn btn-primary' href='/practice'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
