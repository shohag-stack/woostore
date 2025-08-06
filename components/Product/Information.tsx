import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../ui/select'

export function Information({ onNext }: { onNext: () => void }) {
  const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    marketingOptIn: z.boolean().optional(),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    address: z.string().min(1, 'Address is required'),
    apartment: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    postalCode: z.string().min(1, 'Postal code is required'),
    country: z.string().min(1, 'Country is required'),
    state: z.string().min(1, 'State is required'),
    saveInfo: z.boolean().optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: '',
        marketingOptIn: false,
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        postalCode: '',
        country: '',
        state: '',
        saveInfo: false,
        }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
    onNext()
  }

  return (
    <div>
      <h5 className=' font-bold py-3'>Contact</h5>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormField name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email or mobile phone number</FormLabel>
              <Input placeholder="Enter an email or phone number" {...field} />
              <FormMessage />
            </FormItem>
          )} />

          {/* Checkbox: Marketing */}
          <FormField name="marketingOptIn" render={({ field }) => (
            <FormItem>
              <label className="flex items-center gap-2">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                Email me with news and offers
              </label>
            </FormItem>
          )} />

          <h5 className='font-bold'>Shipping address</h5>
          {/* First Name */}
          <div className='grid grid-cols-2 gap-5'>
            <FormField name="firstName" render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )} />

          {/* Last Name */}
          <FormField name="lastName" render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )} />
          </div>

          {/* Address */}
          <FormField name="address" render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Street address" {...field} />
              <FormMessage />
            </FormItem>
          )} />


        <div className='flex gap-3 '>
            {/* Country */}
          <FormField name="country" render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="BD">Bangladesh</SelectItem>
                  {/* Add more countries */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />

          {/* State */}
          <div className='w-full'>
            <FormField name="state" render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )} />
        </div>
    </div>
    

    <div className='grid grid-cols-2 gap-3'>
        {/* City */}
          <FormField name="city" render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )} />

          {/* Postal Code */}
          <FormField name="postalCode" render={({ field }) => (
            <FormItem>
              <FormLabel>Postal Code</FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )} />
    </div>
          {/* Apartment (optional) */}
          <FormField name="apartment" render={({ field }) => (
            <FormItem>
              <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )} />

          

          {/* Save Info Checkbox */}
          <FormField name="saveInfo" render={({ field }) => (
            <FormItem>
              <label className="flex items-center gap-2">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                Save this information for next time
              </label>
            </FormItem>
          )} />

          <button type="submit" className="btn-primary">Continue to Shipping</button>
        </form>
      </Form>
    </div>
  )
}