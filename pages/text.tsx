import Link from "next/link";

export default function Text() {
    return (
        <><header>
            <ol>
                <li><Link href="/">Test1</Link></li>
                <li><Link href="/text">Test2</Link></li>
            </ol>
        </header><div>Text</div></>
    )
}
