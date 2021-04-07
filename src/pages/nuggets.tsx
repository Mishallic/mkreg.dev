import Heading from '@/components/Heading'
import Image from '@/components/ImageComposed'
import dayjs from 'dayjs'

function Nuggets() {
  return (
    <article>
      <div className="flex flex-col items-start py-4 space-y-4">
        <Heading
          title="Nuggets"
          subTitle="Resources I recommend everyone to read"
        />
        <div className="hr-stroke" />
      </div>
      <div className="flex flex-col items-start space-y-4">
        <p className="text-xl">Content is not ready yet.</p>
        <p className="text-xl">
          <strong>ETA:</strong> about ~1 year from{' '}
          {`${dayjs(new Date()).format('MMMM DD, YYYY')}`}
        </p>
        <Image
          src="/static/images/under-construction.jpg"
          alt="Omar Alsoudani bookmarks"
          width={2048}
          height={1357}
        />
      </div>
    </article>
  )
}

export default Nuggets
