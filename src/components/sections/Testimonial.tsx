const testimonials = [
    {
        quote:
            "চমক ভাসমান ফিড ব্যবহার শুরুর পর থেকে আমার তেলাপিয়ার বৃদ্ধি ভালো হচ্ছে। খাবার নষ্ট হয় না, পানিও পরিষ্কার থাকে।",
        author: "মো. রফিকুল ইসলাম",
        location: "বাগমারা, রাজশাহী",
        role: "মৎস্য চাষি",
    },
    {
        quote:
            "বায়োটেক কার্প গ্রোয়ার দিয়ে আমার কার্প মাছের ওজন ভালো বাড়ছে। আগের ফিডের চেয়ে খরচেও সাশ্রয় হচ্ছে।",
        author: "মো. আবুল কালাম",
        location: "পুঠিয়া, রাজশাহী",
        role: "মৎস্য চাষি",
    },
];

export default function Testimonial() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <div className="w-8 h-[3px] bg-gold rounded-full mb-4 mx-auto" />
                    <h2 className="text-navy font-semibold font-[family-name:var(--font-bengali)]">
                        আমাদের চাষিরা কী বলেন
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <figure
                            key={testimonial.author}
                            className="bg-pageBg rounded-xl p-6 border border-navy/10"
                        >
                            <blockquote className="text-bodyGray leading-relaxed mb-6 font-[family-name:var(--font-bengali)]">
                                {testimonial.quote}
                            </blockquote>

                            <figcaption className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-white font-semibold text-base shrink-0">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-navy font-semibold text-sm font-[family-name:var(--font-bengali)]">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-bodyGray text-xs font-[family-name:var(--font-bengali)]">
                                        {testimonial.role} • {testimonial.location}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
