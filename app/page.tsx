import {supabase} from "../lib/supabaseClient"

export default async function Home() {

  const {data, error} = await supabase.from("test_movies").select("*")

  console.log(data)

  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <h1>List of movies</h1>
       <ul>
        {
          data?.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))
        }
       </ul>
      </main>
  );
}
