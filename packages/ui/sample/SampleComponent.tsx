import { ObjectWithName } from "@burki/core";
import { Button } from "@mantine/core";

export default function SampleComponent(props:ObjectWithName){
    return (
        <Button> Hello {props.name}</Button>
    );
}