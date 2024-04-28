import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function MainComponent() {
  return (
    <div className='grid min-h-screen w-full lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-[60px] items-center border-b px-6'>
            <h1 className=''>Scaffolding AI</h1>
          </div>
          <div className='flex-1 overflow-auto py-2'>
            <div className='grid items-start px-4 text-sm font-medium'>
              <h2>Settings</h2>
              <h2>Scaffold Direction Dropdown</h2>
              <h2>Week Dropdown</h2>
              <h2>Vocabulary Dropdown</h2>
              <h2>Reset button</h2>
              <h2>Review button</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
          {/* Button to toggle side bar*/}
          <Button className='lg:hidden' />
          <div className='w-full flex-1'>
            <div className='relative'>
              <h2>
                Show Vocab word; Scaffold Direction; Maybe extension question?
              </h2>
            </div>
          </div>
        </header>
        <main className='flex-1 flex flex-col'>
          <div className='flex-1 flex flex-col'>
            <div className='flex-1 overflow-auto p-4 md:p-6'>
              <div className='grid gap-4'>
                <div className='grid gap-2 justify-end'>
                  <div className='bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 rounded-lg p-4'>
                    <p>
                      Can you think of places where it is important to be quiet
                      so that you don't disturb others?
                    </p>
                  </div>
                  <div className='flex items-center gap-2 justify-end'>
                    <p className='text-sm font-medium'>Teacher</p>
                  </div>
                </div>
                <div className='grid gap-2'>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm font-medium'>Student</p>
                  </div>
                  <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-4'>
                    <p>
                      The library is a place where it is important to be quiet
                    </p>
                  </div>
                </div>
                <div className='grid gap-2 justify-end'>
                  <div className='bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 rounded-lg p-4'>
                    <p>
                      Have you ever been disturbed at the library by someone?
                    </p>
                  </div>
                  <div className='flex items-center gap-2 justify-end'>
                    <p className='text-sm font-medium'>Teacher</p>
                  </div>
                </div>
                <div className='grid gap-2'>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm font-medium'>Child</p>
                  </div>
                  <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-4'>
                    <p>
                      Yes, I was disturbed at the library by someone talking
                      loudly on their phone once.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='border-t px-4 md:px-6 py-4'>
              <form className='flex items-center gap-2'>
                <Input
                  className='flex-1 bg-white shadow-none appearance-none dark:bg-gray-950'
                  placeholder='Type your message...'
                  type='text'
                />
                <Button type='submit'>Send</Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
