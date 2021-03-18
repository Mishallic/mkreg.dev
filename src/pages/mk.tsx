import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import Image from '@/components/ImageComposed'

export default function MK() {
  const extraMeta = {
    title: 'MK',
    description: 'Mark Knopfler OBE',
  }

  return (
    <Page extraMeta={extraMeta}>
      <CenteredColumn>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1>The Sultan of swing</h1>
              <p className="text-2xl">Mark Knopfler OBE</p>
            </div>
            <div>
              <Image
                src="/static/images/mk.jpg"
                alt="Mark Knopfler"
                width={3000}
                height={2400}
              />
            </div>
            <div className=" hr-stroke" />
          </div>
          <div className="flex flex-col space-y-4 text-left text-gray-800 sm:items-start">
            <p className="text-xl">
              Well, Congrats on finding this page! Let me introduce you to my
              favourite human being in the universe. The one and only the
              legendendary Mr.Mark Knopfler.
            </p>
            <p className="text-xl">
              If you have ever wondered why the hell I have this domain rather
              than something closer to my name (for SEO bleh...), Then I can
              tell you that it's based on this acronym:
            </p>
            <p className="mx-auto text-xl text-center">
              <a
                href="https://www.youtube.com/watch?v=JZWDmY6_E2A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 border-b border-red-600 dark:border-red-400 dark:text-red-400"
              >
                Mark Knopfler Red Electric Guitar &rarr;
              </a>
            </p>
            <p className="text-xl">
              Every one has his own "Red Electric Guitar". Seeing my Idol
              getting his guitar, gives me some euphoric feeling with a smile on
              my face.
            </p>
            <p className="text-xl">
              So there you go, now you have the answer to the ultimate question
              of life. You can check my YouTube playlist for some goodies in the
              footer below 👇
            </p>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
