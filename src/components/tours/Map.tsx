export default function Map({ url }: { url: string }) {
    return (
        <iframe className="w-full h-full rounded-2xl" src={url} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    );
}