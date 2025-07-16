import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>

export function CreateRoom(){
  const { data, isLoading} = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async() =>{
      const response = await fetch('http://localhost:3333/rooms');
      const result: GetRoomsAPIResponse = await response.json()

      return result
    }
  })

  return (
    <div>
      <div>Create Room</div>

      {isLoading && <p>Carregando...</p>}

      <div className="flex flex-col gap-1">
        {data?.map(room => (
          <Link key={room.id} to={`/room/${room.id}`}>
            <Button size={"sm"} variant={"link"}>{room.name}</Button>
          </Link>
        ))}
      </div>

      <Link to="/room">
        <Button size={"sm"} variant={"link"}>Acessar Sala</Button>
      </Link>
    </div>
  )
}