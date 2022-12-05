import { ReactNode } from 'react'

type Address = {
    line1: string;
    line2: string;
    state: string;
    zipcode: string;
}

type Who = { 
    name: string; 
    friend: boolean;
    address?: Address;
}
type Props = { 
    who: Who;
    message?: string ;
    renderMessage?: (message: string) => ReactNode;
}

const Hello = ({ 
    who, 
    message,
    renderMessage
}: Props ) => {
  return (
    <div>
        <p>Hello, {who.name} {who.friend && "my friend"}</p>
        <p>{message && (renderMessage ? renderMessage(message) : <p>{message}</p>)}</p>
    </div>
  )
}

export default Hello