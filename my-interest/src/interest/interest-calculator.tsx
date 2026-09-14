export default function InterstCalculator({year, amount, invoke}: {year: number, amount:number, invoke: (message: string) => void })
{
    return (
        <>
        <p>your {year} interst is {amount * year} taka</p>
        <button onClick={() => invoke("Hello Sojib")}>Invoke Partent</button>
        </>
    )
}