import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CreateRoom(){
  return (
    <div>
      <div>Create Room</div>

      <Link to="/room">
        <Button size={"sm"} variant={"link"}>Acessar Sala</Button>
      </Link>
    </div>
  )
}